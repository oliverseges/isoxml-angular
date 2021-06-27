import { ElementCompact } from 'xml-js'

import { ISOXMLManager } from '../ISOXMLManager'
import { registerEntityClass } from '../classRegistry'
import { fromXML, toXML } from '../utils'
import { AllocationStamp } from './AllocationStamp'

import { Entity, EntityConstructor, AttributesDescription } from '../types'

export type ControlAssignmentAttributes = {
    SourceClientNAME: string
    UserClientNAME: string
    SourceDeviceStructureLabel: string
    UserDeviceStructureLabel: string
    SourceDeviceElementNumber: number
    UserDeviceElementNumber: number
    ProcessDataDDI: string
    AllocationStamp?: AllocationStamp[]
}

const ATTRIBUTES: AttributesDescription = {
    A: { name: 'SourceClientNAME', type: 'xs:hexBinary', isPrimaryId: false },
    B: { name: 'UserClientNAME', type: 'xs:hexBinary', isPrimaryId: false },
    C: { name: 'SourceDeviceStructureLabel', type: 'xs:hexBinary', isPrimaryId: false },
    D: { name: 'UserDeviceStructureLabel', type: 'xs:hexBinary', isPrimaryId: false },
    E: { name: 'SourceDeviceElementNumber', type: 'xs:unsignedShort', isPrimaryId: false },
    F: { name: 'UserDeviceElementNumber', type: 'xs:unsignedShort', isPrimaryId: false },
    G: { name: 'ProcessDataDDI', type: 'xs:hexBinary', isPrimaryId: false },
}
const CHILD_TAGS = {
    ASP: { name: 'AllocationStamp' },
}

export class ControlAssignment implements Entity {
    public tag = 'CAT'

    constructor(public attributes: ControlAssignmentAttributes, public isoxmlManager: ISOXMLManager) {
    }

    static fromXML(xml: ElementCompact, isoxmlManager: ISOXMLManager, targetClass: EntityConstructor = ControlAssignment): Entity {
        return fromXML(xml, isoxmlManager, targetClass, ATTRIBUTES, CHILD_TAGS)
    }

    toXML(): ElementCompact {
        return toXML(this, ATTRIBUTES, CHILD_TAGS)
    }
}

registerEntityClass('CAT', ControlAssignment)