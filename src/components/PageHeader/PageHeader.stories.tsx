import * as React from 'react';
import { storiesOf } from '@storybook/react';

import PageHeader from './PageHeader';

storiesOf('PageHeader', module).add(
  'PageHeader',
  (): JSX.Element => <PageHeader />
);
