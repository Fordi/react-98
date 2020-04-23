import { Children, cloneElement } from 'react';

export default (children, decor) => Children.map(children, child => cloneElement(child, decor));
