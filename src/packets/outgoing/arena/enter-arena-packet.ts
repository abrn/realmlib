import { Packet } from '../../../packet';
import { PacketType } from '../../../packet-type';
import { Reader } from '../../../reader';
import { Writer } from '../../../writer';

/**
 * Sent to enter the arena.
 */
export class EnterArenaPacket implements Packet {

  readonly type = PacketType.ENTER_ARENA;
  propagate = true;

  //#region packet-specific members
  /**
   * > Unknown.
   */
  currency: number;
  //#endregion

  constructor() {
    this.currency = 0;
  }

  write(writer: Writer): void {
    writer.writeInt32(this.currency);
  }

  read(reader: Reader): void {
    this.currency = reader.readInt32();
  }
}
