import { Packet } from '../../packet';
import { PacketType } from '../../packet-type';
import { Reader } from '../../reader';
import { Writer } from '../../writer';

/**
 * Received to tell the client to play a sound.
 */
export class PlaySoundPacket implements Packet {

  readonly type = PacketType.PLAYSOUND;

  //#region packet-specific members
  /**
   * The object id of the origin of the sound.
   */
  ownerId: number;
  /**
   * The id of the sound to play.
   */
  soundId: number;
  //#endregion

  constructor() {
    this.ownerId = 0;
    this.soundId = 0;
  }

  read(reader: Reader): void {
    this.ownerId = reader.readInt32();
    this.soundId = reader.readUnsignedByte();
  }

  write(writer: Writer): void {
    writer.writeInt32(this.ownerId);
    writer.writeUnsignedByte(this.soundId);
  }
}
