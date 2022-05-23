import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

export interface CollectionFilterComponentProps {
  prop?: string;
  onAddCollection?: Function;
}

export function CollectionFilterComponent(props: CollectionFilterComponentProps) {
  const { onAddCollection } = props;
  const [focus, setFocus] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setFiltered(filter.length > 0);
    filterCollection();
  }, [filter]);

  const filterCollection = () => {};

  const createNewCollection = () => {
    console.log('========');
    if (onAddCollection) onAddCollection();
  };

  const LightTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  }));

  return (
    <div className={styles.root}>
      <LightTooltip title="Create new Collection" placement="bottom-start">
        <button className={[styles.button, styles.center].join(' ')} onClick={() => createNewCollection()}>
          <AddIcon classes={{ root: styles.icon }} />
        </button>
      </LightTooltip>
      <div className={focus ? [styles.inputField, styles.focusable].join(' ') : styles.inputField}>
        <FilterListIcon className={styles.icon} sx={{ margin: '0px 8px' }} />
        <input type="text" value={filter} onSelect={() => setFocus(true)} onBlur={() => setFocus(false)} onChange={(e) => setFilter(e.target.value)} />
        {filtered && (
          <button className={[styles.button, styles.center].join(' ')} style={{ margin: '0px 8px' }} onClick={() => setFilter('')}>
            <ClearSharpIcon classes={{ root: styles.icon }} />
          </button>
        )}
      </div>
      {/* <LightTooltip title="View more actions" placement="bottom-start">
        <button className={[styles.button, styles.center].join(' ')} onClick={() => viewMoreActions()}>
          <i title=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1 8C1 6.89543 1.89543 6 3 6C4.10457 6 5 6.89543 5 8C5 9.10457 4.10457 10 3 10C1.89543 10 1 9.10457 1 8ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7Z" fill="#6B6B6B"></path><path fillRule="evenodd" clipRule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7Z" fill="#6B6B6B"></path><path fillRule="evenodd" clipRule="evenodd" d="M13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6ZM12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8Z" fill="#6B6B6B"></path></svg></i>
        </button>
      </LightTooltip> */}
    </div>
  );
}
