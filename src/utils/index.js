export let getSigner = async (that) => {
  const provider = new that.$ethers.providers.Web3Provider(window.ethereum, "any");
  // Prompt user for account connections
  await provider.send("eth_requestAccounts", []);

  const signer = provider.getSigner();
  const adr = await signer.getAddress()

  const balance = await provider.getBalance(adr).then();
  // 余额是 BigNumber (in wei); 格式化为 ether 字符串
  let etherString = that.$ethers.utils.formatEther(balance);
  return {
    adr,
    etherString
  }
}