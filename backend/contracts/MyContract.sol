// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MyContract { 
    
    struct LeftoverGoods {
        string firstName;
        string lastName;
        string email;
        string contactNo;
        string addressInfo;
        string material;
        uint256 amountInKg;
        uint256 pricePerKg;
        string description;
    }

    struct DeadStock {
        string firstName;
        string lastName;
        string email;
        string contactNo;
        string addressInfo;
        string material;
        uint256 numberOfPieces;
        uint256 pricePerPiece;
        string description;
    }

    // Mapping each user to their list of leftover goods and dead stock
    mapping(address => LeftoverGoods[]) public userLeftoverGoods;
    mapping(address => DeadStock[]) public userDeadStock;

    // Array to store all unique users who have added entries
    address[] public users;

    // Function to add a new leftover goods entry for a user
    function addLeftoverGoods(
        string memory _firstName,
        string memory _lastName,
        string memory _email,
        string memory _contactNo,
        string memory _addressInfo,
        string memory _material,
        uint256 _amountInKg,
        uint256 _pricePerKg,
        string memory _description
    ) public {
        LeftoverGoods memory newLeftoverGoods = LeftoverGoods(
            _firstName,
            _lastName,
            _email,
            _contactNo,
            _addressInfo,
            _material,
            _amountInKg,
            _pricePerKg,
            _description
        );

        // Add the entry to the user's list
        userLeftoverGoods[msg.sender].push(newLeftoverGoods);

        // Track the user if it's their first time adding something
        if (userLeftoverGoods[msg.sender].length == 1) {
            users.push(msg.sender);
        }
    }

    // Function to add a new dead stock entry for a user
    function addDeadStock(
        string memory _firstName,
        string memory _lastName,
        string memory _email,
        string memory _contactNo,
        string memory _addressInfo,
        string memory _material,
        uint256 _numberOfPieces,
        uint256 _pricePerPiece,
        string memory _description
    ) public {
        DeadStock memory newDeadStock = DeadStock(
            _firstName,
            _lastName,
            _email,
            _contactNo,
            _addressInfo,
            _material,
            _numberOfPieces,
            _pricePerPiece,
            _description
        );

        // Add the entry to the user's list
        userDeadStock[msg.sender].push(newDeadStock);

        // Track the user if it's their first time adding something
        if (userDeadStock[msg.sender].length == 1) {
            users.push(msg.sender);
        }
    }

    // Function to get leftover goods added by a specific user
    function getLeftoverGoodsByUser(address _user) public view returns (LeftoverGoods[] memory) {
        return userLeftoverGoods[_user];
    }

    // Function to get dead stock added by a specific user
    function getDeadStockByUser(address _user) public view returns (DeadStock[] memory) {
        return userDeadStock[_user];
    }

    // Function to retrieve all users
    function getAllUsers() public view returns (address[] memory) {
        return users;
    }
}