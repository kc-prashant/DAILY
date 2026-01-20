## Write a short script that:

##Takes a list of IPs

##Prints only those starting with 192.

# Take IPs from user (space-separated)
ips = input("Enter IP addresses separated by spaces: ").split()

print("\nIPs starting with 192.:")
for ip in ips:
    if ip.startswith("192."):
        print(ip)
