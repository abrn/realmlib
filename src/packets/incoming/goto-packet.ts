import { WorldPosData } from '../../data/world-pos-data';
import { Packet } from '../../packet';
import { PacketType } from '../../packet-type';
import { Reader } from '../../reader';
import { Writer } from '../../writer';

/**
 * Received when an entity has moved to a new position.
 */
export class GotoPacket implements Packet {

  readonly type = PacketType.GOTO;

  //#region packet-specific members
  /**
   * The object id of the entity which moved.
   */
  objectId: number;
  /**
   * The new position of the entity.
   */
  position: WorldPosData;
  //#endregion

  constructor() {
    this.objectId = 0;
    this.position = new WorldPosData();
  }

  read(reader: Reader): void {
    this.objectId = reader.readInt32();
    this.position.read(reader);
  }

  write(writer: Writer): void {
    writer.writeInt32(this.objectId);
    this.position.write(writer);
  }
}
