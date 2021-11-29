use anchor_lang::prelude::*;

declare_id!("8dhKfFjFuYiQGSorapkCMY4btfkxq3w1nAzh14im7dbU");

#[program]
pub mod error {
    use super::*;
    pub fn hello(ctx: Context<Hello>) -> Result<()> {
        Err(ErrorCode::Hello.into())
    }
}

#[derive(Accounts)]
pub struct Hello {}

#[error]
pub enum ErrorCode {
    #[msg("This is an error message clients will automatically display")]
    Hello,
}
