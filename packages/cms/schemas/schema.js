import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import addressBlock from './addressBlock'
import header from './header'
import contact from './contact'
import employee from './employee'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'doorkeeper',
  types: schemaTypes.concat([
    header,
    contact,
    employee,
    addressBlock,
  ]),
})
