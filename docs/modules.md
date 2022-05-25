[kane-dbtypes](README.md) / Exports

# kane-dbtypes

## Table of contents

### Enumerations

- [FirestoreCollections](enums/FirestoreCollections.md)

### Interfaces

- [Administrator](interfaces/Administrator.md)
- [Customer](interfaces/Customer.md)
- [Driver](interfaces/Driver.md)
- [DriverAlert](interfaces/DriverAlert.md)
- [DriverDocuments](interfaces/DriverDocuments.md)
- [DriverDocumentsStatus](interfaces/DriverDocumentsStatus.md)
- [DriverStatus](interfaces/DriverStatus.md)
- [FavoriteLocation](interfaces/FavoriteLocation.md)
- [OrganizationSetting](interfaces/OrganizationSetting.md)
- [PanicModeAlert](interfaces/PanicModeAlert.md)
- [Review](interfaces/Review.md)
- [Trip](interfaces/Trip.md)
- [TripLocation](interfaces/TripLocation.md)

### Type aliases

- [AlertType](modules.md#alerttype)
- [AuthorType](modules.md#authortype)
- [DriverAccountStatus](modules.md#driveraccountstatus)
- [PaymentMethod](modules.md#paymentmethod)
- [UserStatus](modules.md#userstatus)

## Type aliases

### AlertType

Ƭ **AlertType**: ``"newDriver"`` \| ``"docsAboutToExpire"`` \| ``"expiredDocs"`` \| ``"panicMode"``

#### Defined in

[src/other/enums.ts:1](https://github.com/gatitolabs/kane-dbtypes/blob/e33ffb5/src/other/enums.ts#L1)

___

### AuthorType

Ƭ **AuthorType**: ``"customer"`` \| ``"driver"``

#### Defined in

[src/other/enums.ts:3](https://github.com/gatitolabs/kane-dbtypes/blob/e33ffb5/src/other/enums.ts#L3)

___

### DriverAccountStatus

Ƭ **DriverAccountStatus**: ``"pending"`` \| ``"available"`` \| ``"unavailable"`` \| ``"expiredDocs"`` \| ``"denied"`` \| ``"onTrip"``

#### Defined in

[src/driver/index.ts:15](https://github.com/gatitolabs/kane-dbtypes/blob/e33ffb5/src/driver/index.ts#L15)

___

### PaymentMethod

Ƭ **PaymentMethod**: ``"cash"`` \| ``"sinpe"`` \| ``"creditCard"``

#### Defined in

[src/other/enums.ts:5](https://github.com/gatitolabs/kane-dbtypes/blob/e33ffb5/src/other/enums.ts#L5)

___

### UserStatus

Ƭ **UserStatus**: ``"active"`` \| ``"inactive"`` \| ``"banned"``

#### Defined in

[src/other/enums.ts:7](https://github.com/gatitolabs/kane-dbtypes/blob/e33ffb5/src/other/enums.ts#L7)