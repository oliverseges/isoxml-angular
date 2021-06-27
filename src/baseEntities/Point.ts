import { ElementCompact } from 'xml-js'

import { ISOXMLManager } from '../ISOXMLManager'
import { registerEntityClass } from '../classRegistry'
import { fromXML, toXML } from '../utils'

import { Entity, EntityConstructor, AttributesDescription } from '../types'

export type PointAttributes = {
    PointType: string
    PointDesignator?: string
    PointNorth: number
    PointEast: number
    PointUp?: number
    PointColour?: number
    PointHorizontalAccuracy?: number
    PointVerticalAccuracy?: number
    Filename?: string
    Filelength?: number
}

const ATTRIBUTES: AttributesDescription = {
    A: { name: 'PointType', type: 'xs:NMTOKEN', isPrimaryId: false },
    B: { name: 'PointDesignator', type: 'xs:string', isPrimaryId: false },
    C: { name: 'PointNorth', type: 'xs:decimal', isPrimaryId: false },
    D: { name: 'PointEast', type: 'xs:decimal', isPrimaryId: false },
    E: { name: 'PointUp', type: 'xs:long', isPrimaryId: false },
    F: { name: 'PointColour', type: 'xs:unsignedByte', isPrimaryId: false },
    G: { name: 'PointId', type: 'xs:ID', isPrimaryId: true },
    H: { name: 'PointHorizontalAccuracy', type: 'xs:decimal', isPrimaryId: false },
    I: { name: 'PointVerticalAccuracy', type: 'xs:decimal', isPrimaryId: false },
    J: { name: 'Filename', type: 'xs:string', isPrimaryId: false },
    K: { name: 'Filelength', type: 'xs:unsignedLong', isPrimaryId: false },
}
const CHILD_TAGS = {
}

export class Point implements Entity {
    public tag = 'PNT'

    constructor(public attributes: PointAttributes, public isoxmlManager: ISOXMLManager) {
    }

    static fromXML(xml: ElementCompact, isoxmlManager: ISOXMLManager, targetClass: EntityConstructor = Point): Entity {
        return fromXML(xml, isoxmlManager, targetClass, ATTRIBUTES, CHILD_TAGS)
    }

    toXML(): ElementCompact {
        return toXML(this, ATTRIBUTES, CHILD_TAGS)
    }
}

registerEntityClass('PNT', Point)