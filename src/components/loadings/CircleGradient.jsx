import CircularProgress from '@mui/material/CircularProgress';

export default function CircleGradient({stopColor = "#e01cd5", startColor = "#1CB5E0"}) {
  return (
    <>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={stopColor} />
            <stop offset="100%" stopColor={startColor} />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
    </>
  );
}