import { ElementCompact } from 'xml-js'

import { ISOXMLManager } from '../ISOXMLManager'
import { registerEntityClass } from '../classRegistry'
import { fromXML, toXML } from '../utils'
import { Link } from './Link'

import { Entity, EntityConstructor, AttributesDescription } from '../types'

export type LinkGroupAttributes = {
    LinkGroupType: string
    ManufacturerGLN?: string
    LinkGroupNamespace?: string
    LinkGroupDesignator?: string
    Link?: Link[]
}

const ATTRIBUTES: AttributesDescription = {
    A: { name: 'LinkGroupId', type: 'xs:ID', isPrimaryId: true },
    B: { name: 'LinkGroupType', type: 'xs:NMTOKEN', isPrimaryId: false },
    C: { name: 'ManufacturerGLN', type: 'xs:anyURI', isPrimaryId: false },
    D: { name: 'LinkGroupNamespace', type: 'xs:token', isPrimaryId: false },
    E: { name: 'LinkGroupDesignator', type: 'xs:string', isPrimaryId: false },
}
const CHILD_TAGS = {
    LNK: { name: 'Link' },
}

export class LinkGroup implements Entity {
    public tag = 'LGP'

    constructor(public attributes: LinkGroupAttributes, public isoxmlManager: ISOXMLManager) {
    }

    static fromXML(xml: ElementCompact, isoxmlManager: ISOXMLManager, targetClass: EntityConstructor = LinkGroup): Entity {
        return fromXML(xml, isoxmlManager, targetClass, ATTRIBUTES, CHILD_TAGS)
    }

    toXML(): ElementCompact {
        return toXML(this, ATTRIBUTES, CHILD_TAGS)
    }
}

registerEntityClass('LGP', LinkGroup)