const R = require('../../dist/rambda.cjs')

describe('any', () => {
  it('', () => {
    expect(
      R.any(val => val < 0)([ 1, 2 ])
    ).toBeFalsy()

    expect(
      R.any(val => val < 2)([ 1, 2 ])
    ).toBeTruthy()
  })
})