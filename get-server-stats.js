// Provides stats & ports of targeted server
// Created by LeQuietScripts

// Server Statistics
// Host Name: crush-fitness
// Max Money: 1.25b
// Min Security: 13
// Available Ram: #GB of #GB
// Security Level: ##
// Hacking Chance: #
// Has Root Access: ####


/** @param {NS} ns */
export async function main(ns) {

	var target = ns.args[0];
  // Provides stats of targeted server, including the name, max money, min security, used & max ram, security level, hacking chance, & root access
	const hostName = ns.args[0];
	var moneyThresh = ns.getServerMaxMoney(target);
	var securityThresh = ns.getServerMinSecurityLevel(target);
	let availableRAM = ns.getServerMaxRam(target);
	let usedRAM = ns.getServerUsedRam(target);
	const securityLevel = ns.getServerSecurityLevel(target);
	var chance = ns.hackAnalyzeChance(target);
	const root = ns.hasRootAccess(target);

	// Prints all stats from above into terminal.
	ns.tprint("Server Statistics");
	ns.tprint("Host Name: ", hostName);
	ns.tprint("Max Money: ", ns.formatNumber(moneyThresh));
	ns.tprint("Min Security: ", securityThresh);
	ns.tprint("Available Ram: ", usedRAM, "GB of ", availableRAM, "GB");
	ns.tprint("Security Level: ", securityLevel);
	ns.tprint("Hacking Chance: ", chance);
	ns.tprint("Has Root Access: ", root);

	// Checks which ports are open.
	const ssh = ns.getServer(target).sshPortOpen;
	const http = ns.getServer(target).httpPortOpen;
	const smtp = ns.getServer(target).smtpPortOpen;
	const sql = ns.getServer(target).sqlPortOpen;
	const ftp = ns.getServer(target).ftpPortOpen;
	var requiredPorts = ns.getServerNumPortsRequired(target);
	ns.tprint("SSH: ", ssh, " HTTP: ", http, " SMTP: ", smtp, " SQL: ", sql, " FTP: ", ftp);
	ns.tprint("Required Ports: ", requiredPorts);
}
