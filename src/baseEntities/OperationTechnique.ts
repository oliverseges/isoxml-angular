import { ElementCompact } from 'xml-js'

import { ISOXMLManager } from '../ISOXMLManager'
import { registerEntityClass } from '../classRegistry'
import { fromXML, toXML } from '../utils'

import { Entity, EntityConstructor, AttributesDescription } from '../types'

export type OperationTechniqueAttributes = {
    OperationTechniqueDesignator: string
}

const ATTRIBUTES: AttributesDescription = {
    A: { name: 'OperationTechniqueId', type: 'xs:ID', isPrimaryId: true },
    B: { name: 'OperationTechniqueDesignator', type: 'xs:string', isPrimaryId: false },
}
const CHILD_TAGS = {
}

export class OperationTechnique implements Entity {
    public tag = 'OTQ'

    constructor(public attributes: OperationTechniqueAttributes, public isoxmlManager: ISOXMLManager) {
    }

    static fromXML(xml: ElementCompact, isoxmlManager: ISOXMLManager, targetClass: EntityConstructor = OperationTechnique): Entity {
        return fromXML(xml, isoxmlManager, targetClass, ATTRIBUTES, CHILD_TAGS)
    }

    toXML(): ElementCompact {
        return toXML(this, ATTRIBUTES, CHILD_TAGS)
    }
}

registerEntityClass('OTQ', OperationTechnique)