import { ElementCompact } from 'xml-js'

import { ISOXMLManager } from '../ISOXMLManager'
import { registerEntityClass } from '../classRegistry'
import { fromXML, toXML } from '../utils'

import { Entity, EntityConstructor, AttributesDescription, ISOXMLReference } from '../types'

export type DataLogValueAttributes = {
    ProcessDataDDI: string
    ProcessDataValue: number
    DeviceElementIdRef: ISOXMLReference
    DataLogPGN?: number
    DataLogPGNStartBit?: number
    DataLogPGNStopBit?: number
}

const ATTRIBUTES: AttributesDescription = {
    A: { name: 'ProcessDataDDI', type: 'xs:hexBinary', isPrimaryId: false },
    B: { name: 'ProcessDataValue', type: 'xs:long', isPrimaryId: false },
    C: { name: 'DeviceElementIdRef', type: 'xs:IDREF', isPrimaryId: false },
    D: { name: 'DataLogPGN', type: 'xs:unsignedLong', isPrimaryId: false },
    E: { name: 'DataLogPGNStartBit', type: 'xs:unsignedByte', isPrimaryId: false },
    F: { name: 'DataLogPGNStopBit', type: 'xs:unsignedByte', isPrimaryId: false },
}
const CHILD_TAGS = {
}

export class DataLogValue implements Entity {
    public tag = 'DLV'

    constructor(public attributes: DataLogValueAttributes, public isoxmlManager: ISOXMLManager) {
    }

    static fromXML(xml: ElementCompact, isoxmlManager: ISOXMLManager, targetClass: EntityConstructor = DataLogValue): Entity {
        return fromXML(xml, isoxmlManager, targetClass, ATTRIBUTES, CHILD_TAGS)
    }

    toXML(): ElementCompact {
        return toXML(this, ATTRIBUTES, CHILD_TAGS)
    }
}

registerEntityClass('DLV', DataLogValue)