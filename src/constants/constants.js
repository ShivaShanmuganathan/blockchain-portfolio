export const projects = [
  {
    title: "NFT Rental Marketplace On Polygon",
    description: "🔥Full Stack NFT Rental Marketplace🔥 NFT Owner can list their NFT for rent by specifying the name, description, rental duration, and rental price. Anyone can rent the NFT from the Rental Marketplace by paying the rental price [ No Collateral ] At end of rental duration, NFT is transferred from renter to NFT Owner. ",
      image: '/images/NFT_Rental_Marketplace.gif',
      tags: ['Solidity', 'Hardhat', 'Ethers.js', 'Next.js'],
    source: 'https://github.com/ShivaShanmuganathan/NFT-Rental-Marketplace',
    visit: 'https://nft-rental-marketplace.netlify.app/',
    id: 0,
  },

  {
    title: "Dynamic NFT Minigame Full Stack Dapp",
    description: " 🔥Full Stack NFT Mini Game Dapp🔥 Users can choose Valorant Heroes and mint them as an NFT. User can use the minted Hero NFT to battle against Thanos. Battling against Thanos changes the HP (On-Chain Metadata) of Hero NFT",
      image: '/images/select_char.gif',
      tags: ['Solidity', 'Hardhat', 'Ethers.js', 'React'],
    source: 'https://github.com/ShivaShanmuganathan/blockchain-developer-bootcamp-final-project',
    visit: 'https://nftbattle.netlify.app/',
    id: 1,
  },
  
  {
    title: "Yield Farm DeFi Dapp",
    description: "🔥Full Stack DeFi Yield Farming Dapp🔥 Users can stake allowed ERC20 Tokens in the Dapp. Current market value of the staked asset is fetched using  Chainlink’s Decentralized Price Feeds. Staked users receive token rewards that are proportional to the amount of funds they have staked on the platform.",
      image: '/images/defi_dapp.gif',
      tags: ['Solidity', 'Brownie', 'React', 'Material-UI'],
    source: 'https://github.com/ShivaShanmuganathan/defi-dapp-yield-farm',
    visit: 'https://yieldfarm.netlify.app/',
    id: 2,
  },

  {
    title: "Full Stack DAO Dapp EIP-1167: Minimal Proxy ",
    description: "🔥Full Stack DAO Dapp with EIP-1167🔥 DAO members can create a proposal to purchase NFT from NFT-marketplace. 10 minutes is the voting period for each proposal. DAO Members can vote on the proposal. After voting period, proposal can be executed ⏩ NFT is purchased from the NFT Marketplace using ETH in the proposal contract.",
      image: '/images/DAO_dapp.gif',
      tags: ['Solidity', 'Hardhat', 'Ethers.js', 'Next.js'],
    source: 'https://github.com/ShivaShanmuganathan/fullstack-dao-dapp',
    visit: 'http://fullstack-dao-dapp.vercel.app/',
    id: 3,
  },

  {
    title: "Dutch Auction ERC20 Marketplace",
    description: "Using this Dutch Auction Contract, anyone can create an auction and sell their ERC20 tokens. The price of the listed item in the auction decreases linearly with time. Everyone except the auction owner can bid in the listed auction. In each auction, each user can only bid once.",
    image: '/images/dutchAuction_2.gif',
    tags: ['Solidity', 'Hardhat', 'Ethers.js'],
    source: 'https://github.com/ShivaShanmuganathan/DutchAuction',
    visit: 'https://github.com/ShivaShanmuganathan/DutchAuction',
    id: 4,
  },

  {
    title: "NFT Ticketing System",
    description: "🔥Full Stack NFT Ticketing System🔥 Full Stack NFT Ticketing System & proof-of-attendance system with wallet QR code scanning. Anyone can mint NFT from this dapp by paying the mint price. Admin can check-in users in this dapp using their NFT Tickets, and it is saved in the contract.",
    image: '/images/nft_ticketing.JPG',
    tags: ['Solidity', 'Hardhat', 'Ethers.js', 'React'],
    source: 'https://github.com/ShivaShanmuganathan/NFT-Ticketing-System-Frontend ',
    visit: 'https://nft-ticketing-system.netlify.app/',
    id: 5,
  },
  
  {
    title: "Aave Flashloan",
    description: "A simple contract implementing Aave V2 Flash Loans. Ethereum Mainnet is forked, and tests are performed by making use of Brownie.",
      image: '/images/flashloan.gif',
      tags: ['Solidity', 'Brownie', 'Aave Protocol'],
    source: 'https://github.com/ShivaShanmuganathan/aave-flashloan',
    visit: 'https://github.com/ShivaShanmuganathan/aave-flashloan',
    id: 6,
  },
  
  {
    title: 'WavePortal Simple Dapp',
    description:"A simple dapp that receives messages from users, stores it in the SmartContract, and displays it to the User.",
    image: '/images/waves.gif',
    tags: ['Solidity', 'Hardhat', 'Ethers.js', 'React'],
    source: 'https://github.com/ShivaShanmuganathan/wave-portal',
    visit: 'https://waveportal-baseline-student.shivashanmugana.repl.co/',
    id: 7,
  },
  
  {
    title: 'Dockerized PyChain',
    description: "Dockerized Blockchain built from scratch in Python to better understand how a blockchain works. I learnt how to verify & add Txns to a Block, how Blocks are validated & verified before adding it to Blockchain. I also learnt how Mining, Proof of Work, Signing, Verification, and how a Miner is Rewarded",
      image: '/images/python_docker_blockchain.png',
      tags: ['Python', 'Docker'],
    source: 'https://github.com/ShivaShanmuganathan/PyChain',
    visit: 'https://github.com/ShivaShanmuganathan/PyChain',
    id: 8,
  },
  
  {
    title: 'PyCryption',
    description: "A Dockerized Python application that allows users to sign, encrypt, verify and decrypt files.",
    image: '/images/docker_python.png',
    tags: ['Python', 'Docker'],
    source: 'https://github.com/ShivaShanmuganathan/PyChain',
    visit: 'https://github.com/ShivaShanmuganathan/PyChain',
    id: 9,
  },

];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey in Computer Science 👨🏾‍💻', },
  { year: 2018, text: 'Started Learning 🏫 Data Science 👩🏾‍🔬 & Web Development 🕸', },  
  { year: 2019, text: 'Interned At AT&T and a Data Science Startup as a Data Science Intern 🎯', },
  { year: 2020, text: '1️⃣ Graduated Udacity Deep Learning Bootcamp 🌟🐱‍🏍 \n 2️⃣Wrote a Research Paper on Image Dehazing with Dynamic UNets & Transfer Learning 📃', },
  { year: 2021, text: "1️⃣Graduated College with a CS Degree 🎓   \n 2️⃣ Took a Deep Dive into Blockchain Development 🔗₿🔗 \n 3️⃣🌟🎯 Completed Consensys Blockchain Developer Bootcamp", },
  { year: 2022, text: "🌟🎯 Completed Encode's Expert Solidity Bootcamp ⏩⚡Started Building Awesome Full Stack DAPPS 🔥 \n 🚀Working as a Freelance Smart Contract Developer🌕" , },
  
];