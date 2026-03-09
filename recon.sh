#!/bin/bash

domain=$1

echo "Starting recon for $domain"

echo "Running subdomain enumeration..."

assetfinder --subs-only $domain > subs.txt
subfinder -d $domain >> subs.txt

sort -u subs.txt > final_subs.txt

echo "Checking alive hosts..."

httpx -l final_subs.txt -silent > alive.txt

echo "Collecting URLs..."

gau $domain > urls.txt

echo "Crawling endpoints..."

katana -list alive.txt -o endpoints.txt

echo "Extracting parameters..."

cat urls.txt | grep "=" > params.txt

echo "Running gf patterns..."

cat params.txt | gf xss > xss.txt
cat params.txt | gf sqli > sqli.txt
cat params.txt | gf ssrf > ssrf.txt

echo "Recon completed."

echo "Files generated:"
echo "subdomains: final_subs.txt"
echo "alive hosts: alive.txt"
echo "urls: urls.txt"
echo "parameters: params.txt"
echo "xss targets: xss.txt"
echo "sqli targets: sqli.txt"
echo "ssrf targets: ssrf.txt"