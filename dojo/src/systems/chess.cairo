// Starknet import
use starknet::ContractAddress;

// Model
#[derive(Copy, Drop, Serde, IntrospectPacked, Debug)]
#[dojo::model]
pub struct Chess {
    #[key]
    pub game_id: u32,
    #[key]
    pub player_1: ContractAddress,
    #[key]
    pub player_2: ContractAddress,
    pub winner: ContractAddress,
    pub draw: bool
}
