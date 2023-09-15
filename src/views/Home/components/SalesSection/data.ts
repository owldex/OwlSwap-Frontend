import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade anything. With Fast, Secure Network.'),
  bodyText: t('Trade any token on Core Chain in seconds, just by connecting your wallet.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://shadow-11.gitbook.io/shadowswap/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'ETH', alt: t('ETH token') },
      { src: 'BTC', alt: t('BTC token') },
      { src: 'Core3D', alt: t('Core3D token') },
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with your crypto.'),
  bodyText: t('ShadowSwap makes it easy to make your crypto work for you. Let your Shadows work for you.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.shadowswap.xyz/products/yield-farming',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [{ src: 'shdwearn', alt: t('Shadow with shdw token') }],
  },
})

export const nftammSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Introducing A Decentralised NFT Marketplace on Core Network.'),
  bodyText: t(
    'WoofSwap NFT Marketplace allows users to trade NFTs in Liquidity Pool thereby Fostering More Defi to NFTs and enabling easy trading of assets. Changing how users perceive NFTs and NFT Trading',
  ),
  reverse: false,
  primaryButton: {
    to: '/nftamm',
    text: t('NFT Dex'),
    external: false,
  },
  secondaryButton: {
    to: 'https://shadow-11.gitbook.io/shadowswap/products/amm-nft-marketplace',
    text: t('Learn More'),
    external: true,
  },
  images: {
    path: '/images/home/nftamm/',
    attributes: [{ src: 'NFT', alt: t('NFT Pic') }],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Cast Your Woof on your Finances.'),
  bodyText: t(
    'Woof token is at the heart of the WoofSwap ecosystem, Governing all Woof Products with Core on its Side . Buy it, farm it, spend it, stake it, borrow it, use it to buy nft or even vote with it!',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0xddBa66C1eBA873e26Ac0215Ca44892a07d83aDF5&chainId=1116',
    text: t('Buy WOOF'),
    external: false,
  },
  secondaryButton: {
    to: 'https://www.woofsite.xyz/',
    text: t('Learn'),
    external: true,
  },

  // images: {
  //   path: '/images/home/cake/',
  //   attributes: [
  //     { src: 'star-bottom-right', alt: t('Small 3d star') },
  //     { src: 'star-top-right', alt: t('Small 3d star') },
  //     { src: 'SHDW3D', alt: t('SHDW token') },
  //     { src: 'star-top-left', alt: t('Small 3d star') },
  //   ],
  // },
  images: {
    path: '/images/',
    attributes: [
      { src: 'twin-woof', alt: t('Woof Token') },
    ],
  },
})
