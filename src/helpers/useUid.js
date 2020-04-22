import { useState } from 'react';

export default id => id || useState(`_${Math.random().toString(36).substr(2)}`)[0];
