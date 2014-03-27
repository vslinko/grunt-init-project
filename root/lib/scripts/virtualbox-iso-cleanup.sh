apt-get -y autoremove
apt-get clean

rm -rf /tmp/*
rm /var/lib/dhcp/*
rm /etc/udev/rules.d/70-persistent-net.rules
rm -rf /dev/.udev/
rm /lib/udev/rules.d/75-persistent-net-generator.rules

dd if=/dev/zero of=/EMPTY bs=1M
rm -f /EMPTY
