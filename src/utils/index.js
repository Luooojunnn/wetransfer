export let getSigner = async (that) => {
  const provider = new that.$ethers.providers.Web3Provider(window.ethereum, "any");
  // Prompt user for account connections
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  return await signer.getAddress()
}