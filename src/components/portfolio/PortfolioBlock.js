import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import {Link} from "react-router-dom";

function PortfolioBlock(props) {
   const {image, live, source, title, caseStudy} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            {caseStudy ? (
               <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                  <Link to={live} style={{textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                     <i className={'fa fa-book'} aria-hidden="true"/>
                     <span>Case Study</span>
                  </Link>
               </Box>
            ) : (
               <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                  <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
               </Box>
            )}
            {source && (
               <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                  <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
               </Box>
            )}
         </Box>
      </Box>
   );
}

export default PortfolioBlock;