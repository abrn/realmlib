import { TradeResult } from '../../models';
import { Packet } from '../../packet';
import { PacketType } from '../../packet-type';
import { Reader } from '../../reader';
import { Writer } from '../../writer';

/**
 * Received when the active trade has completed, regardless of whether
 * it was accepted or cancelled
 */
export class TradeDonePacket implements Packet {

  readonly type = PacketType.TRADEDONE;

  /**
   * The result of the trade
   */
  code: TradeResult;
  /**
   * > Unknown
   */
  description: string;

  constructor() {
    this.code = 0;
    this.description = '';
  }

  read(reader: Reader): void {
    this.code = reader.readInt32();
    this.description = reader.readString();
  }

  write(writer: Writer): void {
    writer.writeInt32(this.code);
    writer.writeString(this.description);
  }

  toString(): string {
    return `[TradeDone] Result: ${this.code}\n
    Description: ${this.description}`;
  }
}
