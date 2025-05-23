// Starknet import
use starknet::ContractAddress;

// Model
#[derive(Copy, Drop, Serde, IntrospectPacked, Debug)]
#[dojo::model]
pub struct Player {
    #[key]
    pub address: ContractAddress, 
    pub win_streak: u32,
    pub total_points: u32,
}
