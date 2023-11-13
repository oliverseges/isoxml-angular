import { ISOXMLManager } from "../ISOXMLManager";
import { registerEntityClass } from "../classRegistry";
import { XMLElement } from "../types";
import { fromXML, toXML } from "../utils";
import { TAGS } from "./constants";

import { AttributesDescription, Entity, EntityConstructor } from "../types";

export const enum ExternalFileReferenceFiletypeEnum {
  XML = "1",
}

export type ExternalFileReferenceAttributes = {
  Filename: string;
  Filetype: ExternalFileReferenceFiletypeEnum;
  ProprietaryAttributes?: { [name: string]: string };
  ProprietaryTags?: { [tag: string]: XMLElement[] };
};

const ATTRIBUTES: AttributesDescription = {
  A: {
    name: "Filename",
    type: "xs:ID",
    isPrimaryId: false,
    isOptional: false,
    isOnlyV4: false,
  },
  B: {
    name: "Filetype",
    type: "xs:NMTOKEN",
    isPrimaryId: false,
    isOptional: false,
    isOnlyV4: false,
  },
};
const CHILD_TAGS = {};

export class ExternalFileReference implements Entity {
  public tag = TAGS.ExternalFileReference;

  constructor(
    public attributes: ExternalFileReferenceAttributes,
    public isoxmlManager: ISOXMLManager
  ) {}

  static fromXML(
    xml: XMLElement,
    isoxmlManager: ISOXMLManager,
    internalId?: string,
    targetClass: EntityConstructor = ExternalFileReference
  ): Promise<Entity> {
    return fromXML(
      xml,
      isoxmlManager,
      targetClass,
      ATTRIBUTES,
      CHILD_TAGS,
      internalId
    );
  }

  toXML(): XMLElement {
    return toXML(this, ATTRIBUTES, CHILD_TAGS);
  }
}

registerEntityClass("main", TAGS.ExternalFileReference, ExternalFileReference);
