import { Work } from '@/models';
import { Box, Divider } from '@mui/material';
import React, {Fragment} from 'react';
import { WorkCard } from './work-card';

export interface WorkListProps {
    workList : Work[]
}

export function WorkList ({workList}: WorkListProps) {
    if(!workList.length) return null
  return (
    <Box>
        {workList.map(work=>(
            <Fragment key={work.id}>
                <WorkCard work={work}/>
                <Box>
                    {work.title}
                </Box>
                <Divider sx={{ mt: 2, mb:4}}>

                </Divider>
            </Fragment>
        ))}
    </Box>

  );
}
