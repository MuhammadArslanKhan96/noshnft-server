type nft = {
  name: string;
  nftUrl: string;
  imageName: string;
  imageUrl: string;
  description: string;
  royalties: string;
  size: string;
  properties: string;
  price: string;
  onSale: boolean;
  primaryOwner: string;
  currentOwner: string;
  ownerWallet: string;
  collectionId: number;
  tokenId: number | bigint;
};

export default nft;
