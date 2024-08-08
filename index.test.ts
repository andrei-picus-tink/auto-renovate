import {It, mock, when} from 'strong-mock';

it('foo', () => {
  const fn = mock<(data: {x: number}) => number>();

  when(() => fn(It.isObject())).thenReturn(42);

  expect(fn({x: 1})).toEqual(42)
})
