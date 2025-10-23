
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Custom SVG Icon Components
const HomeCleaningIcon = ({ className }: { className?: string }) => (
  <svg fill="currentColor" viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M94.675,112h260.364c6.772-8,10.497-18.033,10.306-28.361c-0.212-11.452-5.018-22.08-13.531-29.545 c-4.635-4.064-11.917-8.963-20.29-8.963c-0.523,0-1.045-0.018-1.564,0c-21.727,0.765-42.184-7.714-56.141-23.233 C262.437,9.244,246.157,1.981,229.152,1.981c-17.108,0-33.454,7.33-44.845,20.113c-15.572,17.475-39.112,26.193-62.973,23.309 c-1.754-0.212-3.547-0.314-5.329-0.314c-5.327,0-10.905,2.229-16.579,6.601c-8.48,6.533-13.87,16.08-15.179,26.837 c-1.345,11.065,1.738,22.234,8.683,30.96L94.675,112z M192.141,153.939c0.366,0,0.727,0.061,1.083,0.061h192.984c6.39,0,11.589-5.11,11.589-11.501 c0-6.39-5.199-11.499-11.589-11.499H89.89c-0.004,0-0.008,0-0.012,0c-0.003,0-0.006,0-0.009,0H62.932 c-6.391,0-11.59,5.11-11.59,11.499c0,6.391,5.199,11.501,11.59,11.501h128.125C191.414,154,191.775,153.939,192.141,153.939z M346,371h27V229.079c0-3.598-1.713-6.986-4.262-9.54c-0.939-0.939-2.169-1.72-3.308-2.334 c-0.051-0.028-0.172-0.051-0.223-0.08c-1.901-0.993-3.773-1.525-5.984-1.526C351.793,215.6,346,221.647,346,229.079v116.983 c0,0.526,0.142,1.062,0.142,1.612c0,0.55-0.142,1.086-0.142,1.612V371z M382.345,419c-5.502,0-9.345-4.404-9.345-9.906V390h-27v19.091c0,5.502-5.041,9.909-10.543,9.909h-1.485 C318.785,419,307,431.409,307,446.596v6.358c0,0.745,0.282,1.518,0.282,2.318c0,0.799-0.282,1.573-0.282,2.318V465h110v-7.532 c0-0.708-0.251-1.441-0.251-2.197s0.251-1.489,0.251-2.197v-6.47c0-0.013,0.275-0.054,0.276-0.068 C417.256,431.365,405.181,419,390.005,419H382.345z M182,207.527V174H84.729l15.662,129.777C146.902,296.064,182,255.599,182,207.527z M453.198,465H437v9.771c0,5.502-3.988,10.229-9.49,10.229H296.466c-5.502,0-9.466-4.727-9.466-10.229V465 h-10.884l-7.46,45h192.002L453.198,465z M326,399.886v-18.924c0-0.026,0-0.051,0-0.077V358H107.004l16.136,132.537 C124.503,501.755,134.095,510,145.454,510h103.002l9.39-56.551c0.8-4.805,4.956-8.449,9.827-8.449h18.859 C287.142,423,304,403.821,326,399.886z M326,229.078c0-18.419,14.736-33.419,33.154-33.42c0.903,0,1.638-0.133,2.528-0.062L364.189,174H202 v33.527c0,58.161-42.745,107.446-99.166,116.375L104.582,338H326V229.078z"/>
  </svg>
);

const DeepCleaningIcon = ({ className }: { className?: string }) => (
  <svg fill="currentColor" viewBox="-14.94 0 122.88 122.88" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M14.6,43.74h15.78c4.87,0,6.1,3.36,6.1,7.71c0,2.02-0.29,4.29-0.58,6.49c-0.47,3.64-0.91,7.06,0.09,8.3 c1.67,2.08,4.08,4.49,6.66,7.07c6.39,6.4,13.77,13.79,14.32,20.41c0.33,4.05,0.4,9.27-0.33,14.09c-0.56,3.72-1.61,7.23-3.38,9.85 c-0.91,1.34-1.97,2.54-3.33,3.46c-1.37,0.92-3.02,1.55-5.09,1.74c-0.03,0-0.07,0-0.1,0v0H18.08c-0.05,0-0.1,0-0.14-0.01 c-2.84-0.16-5.4-0.81-7.55-2.13c-2.21-1.36-3.95-3.41-5.1-6.34c-0.03-0.08-0.05-0.16-0.06-0.24c-2.42-11.87-3.41-23.7-2.25-35.36 c1.16-11.71,4.48-23.25,10.68-34.47C13.84,43.95,14.22,43.75,14.6,43.74L14.6,43.74L14.6,43.74z M4.75,84.84 c18.15,4.31,27.95-9.61,44.29-1.6c-2.41-2.85-5.26-5.71-7.92-8.38c-2.62-2.62-5.07-5.08-6.82-7.24c-1.59-1.97-1.09-5.84-0.56-9.95 c0.27-2.1,0.55-4.27,0.55-6.21c0-3.1-0.79-5.51-3.91-5.51H15.25C9.41,56.72,6.26,67.78,5.15,79C4.95,80.94,4.82,82.89,4.75,84.84 L4.75,84.84z M46.12,6.97L46,20.87c0,0.5-0.34,0.92-0.8,1.04l0,0c-3.35,0.95-6.3,2.23-8.56,4.22c-2.2,1.94-3.78,4.6-4.49,8.36v4.75 c0,0.61-0.49,1.1-1.1,1.1H15.12c-0.95,0.09-1.71-0.13-2.3-0.72c-0.54-0.55-0.83-1.39-0.84-2.57c0-0.04,0-0.08,0-0.11 c0.36-3.9-0.44-6.81-2.28-9.08c-1.89-2.32-4.93-4.05-8.98-5.52c-0.57-0.21-0.86-0.83-0.66-1.4l0-0.01h0c2.19-5.8,5.57-9.5,9.8-11.8 c4.18-2.27,9.16-3.13,14.62-3.28c3.41-0.09,6.84-0.16,10.28-0.17c3.44-0.01,6.87,0.03,10.29,0.16C45.67,5.85,46.14,6.36,46.12,6.97 L46.12,6.97L46.12,6.97z M43.82,20.04l0.1-12.05c-3.06-0.1-6.11-0.13-9.15-0.12c-3.4,0.01-6.81,0.08-10.23,0.17 c-5.14,0.14-9.79,0.94-13.63,3.02c-3.54,1.92-6.41,4.96-8.39,9.63c3.9,1.52,6.88,3.35,8.88,5.8c2.21,2.71,3.17,6.11,2.77,10.6 c0.01,0.55,0.09,0.88,0.22,1.02c0.07,0.07,0.25,0.09,0.52,0.07c0.06-0.01,0.12-0.02,0.18-0.02h14.87v-3.73h0 c0-0.06,0.01-0.13,0.02-0.19c0.8-4.36,2.63-7.45,5.21-9.73C37.56,22.41,40.5,21.04,43.82,20.04L43.82,20.04z M48.36,6.65 l0.09,13.36h6.53c0.92,0.03,1.39-0.74,1.17-2.73V8.9c-0.02-0.73-0.32-1.21-0.88-1.46L48.36,6.65L48.36,6.65z M70.11,10.99 c1.89,0,3.42,1.29,3.42,2.89c0,1.6-1.53,2.89-3.42,2.89c-1.89,0-3.42-1.29-3.42-2.89C66.69,12.28,68.22,10.99,70.11,10.99 L70.11,10.99z M89.58,10.7c1.89,0,3.42,1.29,3.42,2.89c0,1.6-1.53,2.89-3.42,2.89c-1.89,0-3.42-1.29-3.42-2.89 C86.16,11.99,87.69,10.7,89.58,10.7L89.58,10.7z M89.2,21.59c1.89,0,3.42,1.29,3.42,2.89c0,1.6-1.53,2.89-3.42,2.89 s-3.42-1.29-3.42-2.89C85.78,22.88,87.31,21.59,89.2,21.59L89.2,21.59z M79.75,16.48c1.89,0,3.42,1.29,3.42,2.89 c0,1.6-1.53,2.89-3.42,2.89c-1.89,0-3.42-1.29-3.42-2.89C76.33,17.78,77.86,16.48,79.75,16.48L79.75,16.48z M89.58,0 C91.47,0,93,1.29,93,2.89c0,1.6-1.53,2.89-3.42,2.89c-1.89,0-3.42-1.29-3.42-2.89C86.16,1.29,87.69,0,89.58,0L89.58,0z M79.85,5.49 c1.89,0,3.42,1.29,3.42,2.89c0,1.6-1.53,2.89-3.42,2.89c-1.89,0-3.42-1.29-3.42-2.89C76.42,6.79,77.96,5.49,79.85,5.49L79.85,5.49z M36.89,35.65c1.16-4.65,3.94-7.71,8.62-8.9c1.05,7.48,3.33,13.49,6.51,18.38c1.94,2.74-1.21,5.57-3.48,2.68l-7.36-12.04 L36.89,35.65L36.89,35.65z"/>
  </svg>
);

const MoveInOutIcon = ({ className }: { className?: string }) => (
  <svg fill="currentColor" viewBox="0 0 256 182" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M128,104v61h19.92c0.35-0.08,0.62-0.36,0.69-0.7c1.22-6.95,7.27-12.24,14.58-12.24s13.36,5.29,14.57,12.24 c0.08,0.44,0.8,0.7,1.24,0.7h10v-61H128z M134,44.39V5h-22v19.42L86.78,1.37L2.06,77.25l12.88,14.52L28,79.97V180h16v-26h10v8h6v-8 h10v26h9v-26h10v8h6v-8h10v26h40v-9h-23V98h23V80.7l12.62,11.8l12.99-14.16L134,44.39z M105,145H79v-26h10v8h6v-8h10V145z M253,157 h-2v-11c0-3.55-2.41-7-6-7h-16c-0.24,0-0.98-0.38-1.14-0.54l-17.44-18.81c-0.8-0.81-2.25-1.61-3.42-1.65h-14v47h25 c0.44,0,0.7-0.3,0.78-0.7c1.21-6.95,7.27-12.24,14.57-12.24c7.31,0,13.37,5.29,14.58,12.24c0.08,0.44,0.63,0.7,1.07,0.7h1 c2.3,0,4-1.74,4-4v-3C254,157.56,253.48,157,253,157z M219.75,139.31h-21.34c-0.49,0-0.89-0.41-0.89-0.89v-14.37 c0-0.49,0.4-0.89,0.89-0.89h8.34c0.24,0,0.48,0.12,0.69,0.28l13,14.33C220.92,138.38,220.52,139.31,219.75,139.31z M233.35,155.86 c-6.13,0-11.1,4.97-11.1,11.1c0,6.14,4.97,11.1,11.1,11.1c6.14,0,11.11-4.96,11.11-11.1C244.46,160.83,239.49,155.86,233.35,155.86z M233.35,171.21c-2.33,0-4.25-1.92-4.25-4.25c0-2.33,1.92-4.25,4.25-4.25c2.34,0,4.26,1.92,4.26,4.25 C237.61,169.29,235.69,171.21,233.35,171.21z M163.19,155.86c-6.14,0-11.1,4.97-11.1,11.1c0,6.14,4.96,11.1,11.1,11.1 s11.1-4.96,11.1-11.1C174.29,160.83,169.33,155.86,163.19,155.86z M163.19,171.21c-2.33,0-4.25-1.92-4.25-4.25 c0-2.33,1.92-4.25,4.25-4.25s4.25,1.92,4.25,4.25C167.44,169.29,165.52,171.21,163.19,171.21z"/>
  </svg>
);

const PostRenovationIcon = ({ className }: { className?: string }) => (
  <svg fill="currentColor" viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M40.849,150c0-58.701,46.628-106.597,104.767-108.929l-14.244,9.97c-2.746,1.93-3.414,5.703-1.497,8.449 c1.182,1.688,3.062,2.585,4.973,2.585c1.206,0,2.425-0.353,3.477-1.095l30.318-21.22c1.62-1.138,2.591-2.994,2.591-4.973 s-0.971-3.834-2.591-4.966L138.323,8.601c-2.746-1.93-6.538-1.262-8.449,1.491c-1.917,2.74-1.249,6.525,1.497,8.442l14.838,10.378 C81.101,30.953,28.727,84.415,28.727,150c0,54.223,35.768,100.232,84.956,115.707c-0.007-0.161-0.063-0.334-0.063-0.495 c0-4.045,1.262-7.867,3.358-11.207C72.887,239.984,40.849,198.669,40.849,150z M271.273,150c0-54.217-35.761-100.227-84.949-115.701c0.006,0.167,0.062,0.322,0.062,0.489 c0,4.045-1.262,7.867-3.358,11.207c44.086,14.027,76.124,55.336,76.124,104.005c0,58.694-46.622,106.591-104.76,108.916 l14.243-9.964c2.746-1.917,3.414-5.696,1.497-8.437c-1.917-2.746-5.721-3.414-8.448-1.496l-30.318,21.232 c-1.621,1.138-2.592,2.981-2.592,4.96c0,1.979,0.971,3.835,2.592,4.973l30.318,21.227c1.058,0.73,2.27,1.089,3.476,1.089 c1.911,0,3.791-0.903,4.973-2.585c1.917-2.746,1.249-6.52-1.497-8.449l-14.837-10.378C218.906,269.047,271.273,215.585,271.273,150 z M225.796,146.604c2.548,0,5.097-1.07,6.902-3.161c3.271-3.81,2.845-9.549-0.978-12.828l-75.789-65.164 c-3.414-2.932-8.449-2.932-11.863,0l-75.789,65.164c-3.822,3.278-4.249,9.018-0.978,12.828c3.278,3.804,9.023,4.249,12.827,0.965 L150,84.341l69.871,60.068C221.59,145.887,223.693,146.604,225.796,146.604z M148.021,93.532l-57.111,49.281c-0.661,0.582-1.051,1.41-1.051,2.294v71.244c0,1.676,1.354,3.043,3.03,3.043h114.223 c1.676,0,3.03-1.367,3.03-3.043v-71.244c0-0.884-0.39-1.713-1.051-2.294l-57.111-49.281 C150.841,92.555,149.159,92.555,148.021,93.532z M144.446,199.053c0,2.511-2.041,4.539-4.553,4.539h-17.688 c-2.511,0-4.552-2.028-4.552-4.539v-17.708c0-2.511,2.041-4.539,4.552-4.539h17.688c2.512,0,4.553,2.028,4.553,4.539V199.053z M144.446,161.151c0,2.511-2.041,4.552-4.553,4.552h-17.688c-2.511,0-4.552-2.041-4.552-4.552v-17.72 c0-2.511,2.041-4.546,4.552-4.546h17.688c2.512,0,4.553,2.035,4.553,4.546V161.151z M155.554,143.432 c0-2.511,2.041-4.546,4.553-4.546h17.688c2.511,0,4.552,2.035,4.552,4.546v17.72c0,2.511-2.041,4.552-4.552,4.552h-17.688 c-2.512,0-4.553-2.041-4.553-4.552V143.432z M155.554,181.345c0-2.511,2.041-4.539,4.553-4.539h17.688 c2.511,0,4.552,2.028,4.552,4.539v17.708c0,2.511-2.041,4.539-4.552,4.539h-17.688c-2.512,0-4.553-2.028-4.553-4.539V181.345z"/>
  </svg>
);

const SofaCleaningIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M7 12V13H12H17V12C17 10.3454 18.3395 9.00368 19.9932 9.00001C19.9847 8.67199 19.9657 8.43379 19.9231 8.21964C19.6075 6.63288 18.3671 5.39249 16.7804 5.07686C16.394 5 15.9293 5 15 5H12H9C8.07069 5 7.60603 5 7.21964 5.07686C5.63288 5.39249 4.39249 6.63288 4.07686 8.21964C4.03426 8.43379 4.01527 8.67199 4.00681 9.00001C5.66053 9.00368 7 10.3454 7 12Z" fill="currentColor"/>
    <path d="M18.4444 18H5.55556C5.27849 18 5.00883 17.9683 4.75 17.9084V19C4.75 19.4142 4.41421 19.75 4 19.75C3.58579 19.75 3.25 19.4142 3.25 19V17.1513C2.48508 16.4991 2 15.5284 2 14.4444V12C2 10.8954 2.89543 10 4 10C5.10457 10 6 10.8954 6 12V13.2C6 13.6418 6.35817 14 6.8 14H17.2C17.6418 14 18 13.6418 18 13.2V12C18 10.8954 18.8954 10 20 10C21.1046 10 22 10.8954 22 12V14.4444C22 15.5284 21.5149 16.4991 20.75 17.1513V19C20.75 19.4142 20.4142 19.75 20 19.75C19.5858 19.75 19.25 19.4142 19.25 19V17.9084C18.9912 17.9683 18.7215 18 18.4444 18Z" fill="currentColor"/>
  </svg>
);

const CarpetCleaningIcon = ({ className }: { className?: string }) => (
  <svg fill="currentColor" viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M77.378,303.452c-41.64,18.099-61.766,36.704-70.81,52.688h85.377v0.001c9.328,0,27.808-5.736,46.762-44.151 c5.394-10.933,9.534-21.981,12.546-31.567C126.156,285.477,100.605,293.357,77.378,303.452z M478.013,372.028 c1.555,5.3,2.404,10.9,2.404,16.697c0,32.775-26.664,59.438-59.438,59.438s-59.438-26.664-59.438-59.438 c0-5.797,0.849-11.396,2.404-16.697H329.96v110.16H512v-110.16H478.013z M212.23,391.807c-27.012,0-48.988,21.976-48.988,48.987c0,27.013,21.976,48.988,48.988,48.988 s48.988-21.976,48.988-48.988C261.218,413.783,239.241,391.807,212.23,391.807z M437.675,368.75V139.586c0-64.717-52.651-117.368-117.368-117.368S202.94,74.869,202.94,139.586v134.588 c-5.067,0.166-10.251,0.493-15.518,0.961c-3.615,14.799-9.926,33.694-18.736,51.563c-20.264,41.107-46.8,62.835-76.74,62.835H0.01 L0,400.912c0,14.614,1.883,35.732,18.173,50.332c11.744,10.527,28.86,15.706,53.864,16.297l62.297,0.003 c-2.891-8.393-4.482-17.387-4.482-26.75c0-45.423,36.955-82.379,82.38-82.379c45.424,0,82.38,36.955,82.38,82.379 c0,4.425-0.361,8.767-1.036,13.006c14.664-11.384,22.901-29.378,22.901-52.235l-0.003-41.165l-0.003-0.317 c-0.52-27.248-10.955-49.562-30.175-64.528c-13.056-10.165-29.802-16.741-49.961-19.694V139.586 c0-46.305,37.672-83.977,83.977-83.977c46.305,0,83.976,37.672,83.976,83.977V368.75c-5.711,4.783-9.351,11.96-9.351,19.975 c0,14.363,11.685,26.046,26.046,26.046s26.046-11.685,26.046-26.046C447.026,380.71,443.385,373.532,437.675,368.75z"/>
  </svg>
);

const MattressCleaningIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M11.25 10.5V7.25H9.50003C8.53602 7.25 7.88846 7.2516 7.40542 7.31654C6.94396 7.37858 6.74646 7.4858 6.61615 7.61612C6.48583 7.74644 6.37861 7.94393 6.31656 8.40539C6.25162 8.88843 6.25003 9.53599 6.25003 10.5L11.25 10.5Z" fill="currentColor"/>
    <path d="M17.75 10.5C17.75 9.53599 17.7484 8.88843 17.6835 8.40539C17.6215 7.94393 17.5142 7.74644 17.3839 7.61612C17.2536 7.4858 17.0561 7.37858 16.5946 7.31654C16.1116 7.2516 15.464 7.25 14.5 7.25H12.75V10.5L17.75 10.5Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M13 4H11C7.22879 4 5.34317 4 4.1716 5.17157C3.14913 6.19404 3.019 7.76038 3.00244 10.6494V12.2665C2.6221 12.4854 2.322 12.8248 2.15224 13.2346C2 13.6022 2 14.0681 2 15C2 15.9319 2 16.3978 2.15224 16.7654C2.35523 17.2554 2.74458 17.6448 3.23463 17.8478C3.48702 17.9523 3.78581 17.9851 4.25 17.9953V20C4.25 20.4142 4.58579 20.75 5 20.75C5.41421 20.75 5.75 20.4142 5.75 20V18H18.25V20C18.25 20.4142 18.5858 20.75 19 20.75C19.4142 20.75 19.75 20.4142 19.75 20V17.9953C20.2142 17.9851 20.513 17.9523 20.7654 17.8478C21.2554 17.6448 21.6448 17.2554 21.8478 16.7654C22 16.3978 22 15.9319 22 15C22 14.0681 22 13.6022 21.8478 13.2346C21.678 12.8248 21.3779 12.4854 20.9976 12.2666V10.6494C20.9811 7.76038 20.8509 6.19404 19.8285 5.17157C18.6569 4 16.7713 4 13 4ZM19.25 12.0001V10.448C19.2501 9.54955 19.2501 8.80028 19.1701 8.20552C19.0857 7.57773 18.9 7.01093 18.4446 6.55546C17.9891 6.09999 17.4223 5.91432 16.7945 5.82991C16.1997 5.74995 15.4505 5.74997 14.552 5.75H9.44803C8.54955 5.74997 7.80033 5.74995 7.20555 5.82991C6.57776 5.91432 6.01095 6.09999 5.55549 6.55546C5.10002 7.01093 4.91434 7.57773 4.82994 8.20552C4.74997 8.8003 4.75 9.54952 4.75003 10.448V12.0001C4.82946 12 4.91269 12 5 12H19C19.0873 12 19.1706 12 19.25 12.0001Z" fill="currentColor"/>
  </svg>
);

const OfficeCleaningIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M5 4C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H12H13C13.5523 20 14 19.5523 14 19V5C14 4.44772 13.5523 4 13 4H5ZM5 22H12H13H19C20.6569 22 22 20.6569 22 19V9C22 7.34315 20.6569 6 19 6H16V5C16 3.34315 14.6569 2 13 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22ZM19 20H15.8293C15.9398 19.6872 16 19.3506 16 19V8H19C19.5523 8 20 8.44772 20 9V19C20 19.5523 19.5523 20 19 20ZM7 14H5V16H7V14ZM8 14H10V16H8V14ZM13 14H11V16H13V14ZM17 14H19V16H17V14ZM19 10H17V12H19V10ZM5 10H7V12H5V10ZM10 10H8V12H10V10ZM11 10H13V12H11V10ZM7 6H5V8H7V6ZM8 6H10V8H8V6ZM13 6H11V8H13V6Z" fill="currentColor"/>
  </svg>
);

type Service = {
  name: string;
  description: string;
  price: string;
  icon: React.ComponentType<{ className?: string }>;
  category: "all" | "deep" | "regular" | "specialized";
};

const servicesData: Service[] = [
  {
    name: "Home Cleaning",
    description: "Standard housekeeping by experienced hotel-quality professionals",
    price: "Between $23 – $30 / hr",
    icon: HomeCleaningIcon,
    category: "regular",
  },
  {
    name: "Deep Cleaning",
    description: "Specialized cleaning to declutter your home for a fresh start",
    price: "From $300",
    icon: DeepCleaningIcon,
    category: "deep",
  },
  {
    name: "Move In/Out Cleaning",
    description: "Specialized cleaning for your new home or to handover your apartment",
    price: "From $250",
    icon: MoveInOutIcon,
    category: "specialized",
  },
  {
    name: "Post Renovation Cleaning",
    description: "Specialized cleaning to remove post-renovation dust and debris",
    price: "From $250",
    icon: PostRenovationIcon,
    category: "specialized",
  },
  {
    name: "Sofa Cleaning",
    description: "Professional steam cleaning or extraction service for your sofas",
    price: "From $50",
    icon: SofaCleaningIcon,
    category: "specialized",
  },
  {
    name: "Carpet Cleaning",
    description: "Professional steam cleaning, hot water extraction, and dry cleaning",
    price: "Between $50 – $200",
    icon: CarpetCleaningIcon,
    category: "specialized",
  },
  {
    name: "Mattress Cleaning",
    description: "Remove hidden dust mites, allergens and germs from your mattresses",
    price: "From $65",
    icon: MattressCleaningIcon,
    category: "specialized",
  },
  {
    name: "Office Cleaning",
    description: "Professional commercial cleaning for offices and workspaces",
    price: "Between $25 – $35 / hr",
    icon: OfficeCleaningIcon,
    category: "regular",
  },
];

export function PricingSection3() {
  const filterServices = (category: Service["category"]) => {
    if (category === "all") return servicesData;
    return servicesData.filter((service) => service.category === category);
  };

  const ServiceCard = ({ service }: { service: Service }) => {
    const Icon = service.icon;

    return (
      <Card
        className="group bg-gradient-to-br from-white to-teal-light/5 border-teal-primary/20 hover:border-teal-primary/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full cursor-pointer overflow-hidden"
        role="button"
        tabIndex={0}
        aria-label={`Learn more about ${service.name} - ${service.price}`}
        onClick={() => {
          // Navigate to service detail or booking page
          console.log(`Clicked: ${service.name}`);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            console.log(`Clicked: ${service.name}`);
          }
        }}
      >
        <CardContent className="flex flex-col gap-4 p-6 relative">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-primary/0 via-teal-light/0 to-teal-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Content wrapper */}
          <div className="relative z-10 flex flex-col gap-4">
            {/* Icon */}
            <Icon
              className="w-12 h-12 group-hover:scale-110 transition-transform duration-300 text-teal-primary"
            />

            {/* Service Name */}
            <h3
              className="text-lg font-semibold group-hover:text-teal-primary transition-colors duration-300"
              style={{ color: 'var(--teal-dark)' }}
            >
              {service.name}
            </h3>

            {/* Price */}
            <p
              className="text-base font-bold"
              style={{ color: 'var(--teal-dark)' }}
            >
              {service.price}
            </p>

            {/* Description */}
            <p className="text-sm text-foreground/70 leading-relaxed">
              {service.description}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section
      className="bg-gradient-to-b from-white via-teal-light/8 to-white py-8"
      aria-labelledby="pricing-section-title-3"
      id="pricing"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          {/* Section Header */}
          <div className="section-title-gap-lg flex max-w-2xl flex-col items-center text-center">
            <h2
              id="pricing-section-title-3"
              className="heading-lg"
              style={{ color: 'var(--teal-dark)' }}
            >
              What we Offer
            </h2>
          </div>

          {/* Services Tabs */}
          <Tabs defaultValue="all" className="w-full">
            {/* Tab Navigation */}
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8 bg-teal-light/10 p-1">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-white data-[state=active]:text-teal-dark"
              >
                All Services
              </TabsTrigger>
              <TabsTrigger
                value="regular"
                className="data-[state=active]:bg-white data-[state=active]:text-teal-dark"
              >
                Regular
              </TabsTrigger>
              <TabsTrigger
                value="deep"
                className="data-[state=active]:bg-white data-[state=active]:text-teal-dark"
              >
                Deep Cleaning
              </TabsTrigger>
              <TabsTrigger
                value="specialized"
                className="data-[state=active]:bg-white data-[state=active]:text-teal-dark"
              >
                Specialized
              </TabsTrigger>
            </TabsList>

            {/* All Services */}
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filterServices("all").map((service) => (
                  <ServiceCard key={service.name} service={service} />
                ))}
              </div>
            </TabsContent>

            {/* Regular Cleaning */}
            <TabsContent value="regular" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filterServices("regular").map((service) => (
                  <ServiceCard key={service.name} service={service} />
                ))}
              </div>
            </TabsContent>

            {/* Deep Cleaning */}
            <TabsContent value="deep" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filterServices("deep").map((service) => (
                  <ServiceCard key={service.name} service={service} />
                ))}
              </div>
            </TabsContent>

            {/* Specialized Services */}
            <TabsContent value="specialized" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filterServices("specialized").map((service) => (
                  <ServiceCard key={service.name} service={service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
