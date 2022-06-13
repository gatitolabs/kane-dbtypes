[kane-dbtypes](../README.md) / [Exports](../modules.md) / Trip

# Interface: Trip

Representa un viaje.  Id autogenerado

## Table of contents

### Properties

- [customerId](Trip.md#customerid)
- [date](Trip.md#date)
- [distanceTraveled](Trip.md#distancetraveled)
- [driverId](Trip.md#driverid)
- [from](Trip.md#from)
- [inProgress](Trip.md#inprogress)
- [paymentMethod](Trip.md#paymentmethod)
- [price](Trip.md#price)
- [to](Trip.md#to)
- [tripId](Trip.md#tripid)

## Properties

### customerId

• **customerId**: `string`

Document Id del [Customer](Customer.md)

#### Defined in

[src/trip/index.ts:22](https://github.com/gatitolabs/kane-dbtypes/blob/1664218/src/trip/index.ts#L22)

___

### date

• **date**: `number`

#### Defined in

[src/trip/index.ts:30](https://github.com/gatitolabs/kane-dbtypes/blob/1664218/src/trip/index.ts#L30)

___

### distanceTraveled

• **distanceTraveled**: `number`

#### Defined in

[src/trip/index.ts:31](https://github.com/gatitolabs/kane-dbtypes/blob/1664218/src/trip/index.ts#L31)

___

### driverId

• **driverId**: `string`

Document Id del [Driver](Driver.md)

#### Defined in

[src/trip/index.ts:24](https://github.com/gatitolabs/kane-dbtypes/blob/1664218/src/trip/index.ts#L24)

___

### from

• **from**: [`TripLocation`](TripLocation.md)

[TripLocation](TripLocation.md)

#### Defined in

[src/trip/index.ts:26](https://github.com/gatitolabs/kane-dbtypes/blob/1664218/src/trip/index.ts#L26)

___

### inProgress

• **inProgress**: `boolean`

#### Defined in

[src/trip/index.ts:34](https://github.com/gatitolabs/kane-dbtypes/blob/1664218/src/trip/index.ts#L34)

___

### paymentMethod

• **paymentMethod**: [`PaymentMethod`](../modules.md#paymentmethod)

[PaymentMethod](../modules.md#paymentmethod)

#### Defined in

[src/trip/index.ts:33](https://github.com/gatitolabs/kane-dbtypes/blob/1664218/src/trip/index.ts#L33)

___

### price

• **price**: `number`

#### Defined in

[src/trip/index.ts:29](https://github.com/gatitolabs/kane-dbtypes/blob/1664218/src/trip/index.ts#L29)

___

### to

• **to**: [`TripLocation`](TripLocation.md)

[TripLocation](TripLocation.md)

#### Defined in

[src/trip/index.ts:28](https://github.com/gatitolabs/kane-dbtypes/blob/1664218/src/trip/index.ts#L28)

___

### tripId

• **tripId**: `string`

Id del viaje (4 o 5 digitos, para facilidad para las usuarias)

#### Defined in

[src/trip/index.ts:20](https://github.com/gatitolabs/kane-dbtypes/blob/1664218/src/trip/index.ts#L20)
