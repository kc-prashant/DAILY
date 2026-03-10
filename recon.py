import os
import subprocess
import sys

def run(cmd):
    print(f"\n[+] Running: {cmd}")
    subprocess.run(cmd, shell=True)

def main():
    if len(sys.argv) != 2:
        print("Usage: python3 recon.py <domain>")
        sys.exit(1)

    domain = sys.argv[1]

    # Create recon directory
    os.makedirs(domain, exist_ok=True)
    os.chdir(domain)

    print(f"[+] Starting Recon on {domain}")

    # Subdomain Enumeration
    run(f"assetfinder --subs-only {domain} > subs.txt")

    # Live hosts
    run("cat subs.txt | httpx -silent > live.txt")

    # Collect URLs
    run("cat live.txt | gau > gau.txt")

    # Crawl with Katana
    run("cat live.txt | katana -silent > katana.txt")

    # Combine URLs
    run("cat gau.txt katana.txt | sort -u > urls.txt")

    # JS files
    run("cat urls.txt | grep '\\.js$' > js.txt")

    # GF patterns
    run("cat urls.txt | gf xss > xss.txt")
    run("cat urls.txt | gf sqli > sqli.txt")
    run("cat urls.txt | gf ssrf > ssrf.txt")
    run("cat urls.txt | gf redirect > redirect.txt")

    print("\n[+] Recon Complete")
    print(f"[+] Results saved in {domain}/")

if __name__ == "__main__":
    main()