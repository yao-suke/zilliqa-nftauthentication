# Zilliqa NFT Hackathon - Using NFTs on Zilliqa To Authenticate Users  
<img src="https://github.com/yao-suke/zilliqa-nftauthentication/blob/main/download.png" width="100" height="100"/> 


Youtube Demo & Presentation -  

- [Problem](#problem) 
- [High Level Solution](#solution)
- [Other Potential Use Cases](#usecases)
- [Security Concerns](#security)
- [Future Features and Plans](#future)
- [Technologies Used](#tech)
- [Setup and Build](#setup)

## The Problem <a name="problem"></a>
The onboarding process for employees at tech companies is a long road of usernames, new email addresses, and passwords across several different internal tools. Even with tools such as Okta and GMail to authenticate employees quickly, this can become a hassle if you're attempting to login to your company accounts on another device(cellphone,tablet,etc.) Also, a third party sits between you and having access to these internal tools often to grant you access - the IT Security Deparment. Can NFTs completely replace this process in companies, allowing for easier authentication to internal tools? 

## User Flow <a name="solution"></a>
<img src="https://github.com/yao-suke/zilliqa-nftauthentication/blob/main/Screen%20Shot%202021-10-18%20at%2012.30.13%20AM.png" width="500" height="450"/>  

## Systems Design 
<img src="https://github.com/yao-suke/zilliqa-nftauthentication/blob/main/Screen%20Shot%202021-10-19%20at%2010.12.04%20PM.png" width="500" height="450"/>  

## Potential Use Cases <a name="usecases"></a>   

### COVID-19 Vaccination Status
Can A DApp application be built that mints an NFT to records a person's vaccination status. 

### DAOs 
What if when users joined a DAO on Zilliqa they have an NFT minted to give them access to tools for those in the DAO? 

### Easier Background Checks 
As well as there being an NFT for an employee's access to the internal tools, what if another was minted as a certifciate for this person's employment at a company? Essentially using Zilliqa's blockchain for some to have a "resume" based on the NFTs in someone's wallet showing the different places they have worked.   

### NFT Community DApps 
Similar to BAYC on ethereum, it would be great to provide the boiler plate code for NFT art projects on Zilliqa to easily create communities for their users based on ownership on their NFT. 


## Security Concerns  <a name="security"></a>
- If the Admin smart contract is exploited then there would be extremely damaging reprecussions to the organization. I do not see any in the current implementation of the smart contract but as it becomes more robust with more functionality there is potential for vunerabilities to slip through the cracks.   
- DNS hijacking potentially leading employees to a malicious copy of the site 


#### Possible Solutions For Security Concerns  
Keeping a decentralized copy of the DApp's front end hosted on Skynet using an HNS Domain in this instance would be useful for victims of this attack to be able to still access the original smart contracts. HNS Domains are censorship-resistant, seizure-resistant, and tamper-proof because they are stored on a Proof-of-Work blockchain.

## Future Features and Plans <a name="future"></a>
- Finishing the core functionality of the DApp. Would love for this repository to be an option for future DApps on Zilliqa to fork and use for their developers 
- Creating Administrator Smart Contract to have NFT minting and other IT services managed by this smart contract 
- Creating GraphQL Schema for saving NFT meta data

## Technologies Used <a name="tech"></a>    

#### React 
#### TypeScript
#### Scilla


## Setup <a name="setup"></a>
### Clone Repository 
### Enter Repository On Terminal 
### Run `npm install`
### Run `yarn start`

