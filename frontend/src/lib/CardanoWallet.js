import {
  generateTickets,
  getUserEvents,
  getUserTickets,
  publishEvent,
} from "./Events";

export const availableCardanoWallets = () => {
  if (window.cardano) {
    const { nami, typhon, eternl } = window.cardano;

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
};

class CardanoWallet {
  #api;

  static async create(walletName) {
    walletName = walletName.toLowerCase();
    if (window.cardano && window.cardano[walletName]) {
      let api = await window.cardano[walletName].enable();

      let wallet = new CardanoWallet();
      wallet.#api = api;
      return wallet;
    }
    return null;
  }

  async publishEvent(event) {
    await publishEvent(await this.getStakeAddress(), event);
  }

  async generateTickets(ticketsAmount, event) {
    await generateTickets(await this.getStakeAddress(), ticketsAmount, event);
  }

  async getUserTickets() {
    await getUserTickets(await this.getStakeAddress());
  }

  async getUserEvents() {
    await getUserEvents(await this.getStakeAddress());
  }

  async getStakeAddress() {
    const hexAddresses = await this.#api.getRewardAddresses();
    if (hexAddresses && hexAddresses.length > 0) {
      return hexAddresses[0];
    }
    return null;
  }
}

export default CardanoWallet;
