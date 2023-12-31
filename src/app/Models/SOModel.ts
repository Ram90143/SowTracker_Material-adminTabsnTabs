export interface SOModel{
        selectedDate: Date | undefined;
        sowId: number,
        soName: string,
        jrCode: string,
        requestCreationDate: Date,
        accountId: number,
        technologyId: number,
        role: string,
        locationId: number,
        regionId: number,
        targetOpenPositions: number,
        positionsTobeClosed: number,
        ustpocId: number,
        recruiterId: number,
        usttpmId: number,
        dellManagerId: number,
        statusId: number,
        band: string,
        projectId: string,
        accountManager: string,
        externalResource: string,
        internalResource: string,
        type: string,
        AccountName: string,
        TechnologyName: string,
        Location: string,
        Region: string,
        USTPOCName: string,
        RecruiterName: string,
        USTTPMName: string,
        DellManagerName: string,
        StatusName: string

        isEditing?: boolean;
        isColumnEditing?:boolean;
}
