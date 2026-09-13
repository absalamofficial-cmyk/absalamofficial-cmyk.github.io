#!/usr/bin/env python3
"""
Refreshes apps.json with REAL, live data pulled directly from the public
Google Play Store listing of each app (name, icon, star rating, review
count, install tier). No numbers are invented — whatever Play Store shows
publicly (e.g. "100+", "500+") is exactly what gets written here, because
Google does not publish an exact install counter to anyone, including the
developer's own website.

To add a NEW app after you publish it on Play Console: add one line to
PACKAGE_IDS below with its package name and a short tag/description.
Next scheduled run will pull its real name/icon/rating/downloads and it
will appear on the site automatically, in the same card format as the rest.
"""

import json
import sys
from pathlib import Path

from google_play_scraper import app as gplay_app

ROOT = Path(__file__).parent
OUT_FILE = ROOT / "apps.json"

# id -> (tag, description, short display name)
# Add a new line here when you publish a new app. Everything else
# (real name, icon, rating, installs) is pulled live from Play Store.
PACKAGE_IDS = {
    "com.machinist.toolbox": ("Engineering Tools", "AI-assisted machining calculators — milling, turning, threads, gears — with an offline Mach-AI assistant.", "Machinist Nexus"),
    "com.turningcalculator.pro": ("Engineering Tools", "CNC turning calculator — cutting speed, feed rate, MRR, and tool life across 25+ materials.", "SmartTurn"),
    "com.cncmilling.calculator": ("Engineering Tools", "CNC milling calculator with physical-accuracy engine, offline machine library, and PDF reports.", "SmartMill"),
    "com.metalspinning.calculator": ("Engineering Tools", "Precision analysis for Metal Spinning, Shear Spinning & Flow Forming — materials, mandrel geometry, and forming forces.", "Smart Spin"),
    "com.ramzan.prayer.hadees": ("Islamic Lifestyle", "Prayer times, smart Azan alarms, Hadith library, Tilawat, and a 3D Qibla compass.", "Deenly"),
    "com.al.alishaat": ("Islamic Audio Library", "Free, ad-free audio library of Tafseer, Dars-e-Hadith, Bayanat, and Tilawat with offline downloads.", "Al-Fajar"),
    "com.ludomaster.pk": ("Game", "Real-time multiplayer Ludo with private rooms, global leaderboard, and glass-morphic UI.", "LudoMaster"),
}


def load_existing():
    if OUT_FILE.exists():
        try:
            return {a["id"]: a for a in json.loads(OUT_FILE.read_text())["apps"]}
        except Exception:
            return {}
    return {}


def main():
    existing = load_existing()
    results = []
    any_failed = False

    for pkg, (tag, desc, short_name) in PACKAGE_IDS.items():
        try:
            data = gplay_app(pkg)
            results.append({
                "id": pkg,
                "name": short_name,
                "full_name": data.get("title", short_name),
                "tag": tag,
                "description": desc,
                "icon": data.get("icon"),
                "installs": data.get("installs") or data.get("realInstalls", "N/A"),
                "score": round(data["score"], 1) if data.get("score") else None,
                "ratings": data.get("ratings", 0),
                "url": f"https://play.google.com/store/apps/details?id={pkg}",
            })
            print(f"OK   {pkg} -> {data.get('installs')}, score={data.get('score')}")
        except Exception as e:
            any_failed = True
            print(f"FAIL {pkg}: {e}", file=sys.stderr)
            # Keep last-known-good data for this app instead of dropping it
            if pkg in existing:
                results.append(existing[pkg])

    from datetime import datetime, timezone
    payload = {
        "updated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "apps": results,
    }
    OUT_FILE.write_text(json.dumps(payload, indent=2))
    print(f"\nWrote {len(results)} apps to {OUT_FILE}")

    # Exit non-zero only if EVERY app failed (so a single flaky fetch
    # doesn't fail the whole workflow run and block the commit of the
    # apps that did succeed).
    if any_failed and not results:
        sys.exit(1)


if __name__ == "__main__":
    main()
