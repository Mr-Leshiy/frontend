export function walletsInfo() {
  if (window.cardano) {
    const { nami, yoroi, typhon, eternl } = window.cardano;

    const wallets = [];
    if (nami) {
      wallets.push({
        name: "Nami",
        version: nami.apiVersion,
        icon: nami.icon,
      });
    }
    // Bugs appeared with the usage of yoroi wallet https://github.com/cardano-foundation/cardano-connect-with-wallet/issues/87
    // if (yoroi) {
    //   wallets.push({
    //     name: "Yoroi",
    //     version: yoroi.apiVersion,
    //     icon: yoroi.icon,
    //   });
    // }
    if (typhon) {
      wallets.push({
        name: "Typhon",
        version: typhon.apiVersion,
        icon: typhon.icon,
      });
    }
    if (eternl) {
      wallets.push({
        name: "Eternl",
        version: eternl.apiVersion,
        icon: eternl.icon,
      });
    }
    return wallets;
  } else {
    return [];
  }
}
