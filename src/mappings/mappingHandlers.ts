import { Vote } from "../types";
import { CosmosMessage } from "@subql/types-cosmos";

type Msg = {
  vote: {
    proposal_id: bigint;
    vote: string;
  };
};

export async function handleTerraDeveloperFund(
  message: CosmosMessage<{ sender: string; msg: Msg; }>
): Promise<void> {
  // logger.info(JSON.stringify(message));
  // Example vote https://www.mintscan.io/juno/txs/EAA2CC113B3EC79AE5C280C04BE851B82414B108273F0D6464A379D7917600A4

  const voteRecord = Vote.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    voter: message.msg.decodedMsg.sender,
    proposalID: message.msg.decodedMsg.msg.vote.proposal_id,
    vote: message.msg.decodedMsg.msg.vote.vote === 'yes',
  })

  await voteRecord.save();
}
