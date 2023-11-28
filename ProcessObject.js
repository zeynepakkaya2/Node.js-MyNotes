`This processor architecture is ${process.arch}`;
// This processor architecture is arm64

// The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched
// The first element will be process.execPath
// The second element will be the path to the JavaScript file being executed
process.argv;
// ['/usr/local/bin/node', '/Users/zeynep/Documents/Node.js/1.js']

// same output
process.argv0;
// /usr/local/bin/node
process.execPath;
// /usr/local/bin/node

process.cwd();
// /Users/zeynep/Documents/Node.js

process.debugPort;
// 50209

process.env;
/*
{
  SHELL: '/bin/zsh',
  USER: 'zeynep',
  COMMAND_MODE: 'unix2003',
  PWD: '/Users/zeynep/Documents/Node.js',
  SHLVL: '1',
  HOME: '/Users/zeynep',
  LOGNAME: 'zeynep',
}
*/

process.memoryUsage();
// {rss: 41074688, heapTotal: 7061504, heapUsed: 5581008, external: 2189962, arrayBuffers: 16703}
/*
heapTotal and heapUsed refer to V8's memory usage.
external refers to the memory usage of C++ objects bound to JavaScript objects managed by V8.
rss, Resident Set Size, is the amount of space occupied in the main memory device for the process.
arrayBuffers refers to memory allocated for ArrayBuffers and SharedArrayBuffers, including all Node.js Buffers.
*/

process.platform; // darwin

process.resourceUsage();
/*
  userCPUTime: 28834,
  systemCPUTime: 24449,
  maxRSS: 29824,
  sharedMemorySize: 0,
  unsharedDataSize: 0,
  unsharedStackSize: 0,
  minorPageFault: 824,
  majorPageFault: 1407,
  swappedOut: 0,
  fsRead: 0,
  fsWrite: 0,
  ipcSent: 0,
  ipcReceived: 0,
  signalsCount: 0,
  voluntaryContextSwitches: 0,
  involuntaryContextSwitches: 363
*/
/*
Returns: <Object> the resource usage for the current process.
All of these values come from the uv_getrusage call which returns a uv_rusage_t struct.

userCPUTime maps to ru_utime computed in microseconds. It is the same value as process.cpuUsage().user.
systemCPUTime maps to ru_stime computed in microseconds. It is the same value as process.cpuUsage().system.

maxRSS maps to ru_maxrss which is the maximum resident set size used in kilobytes.

minorPageFault maps to ru_minflt which is the number of minor page faults for the process.
majorPageFault maps to ru_majflt which is the number of major page faults for the process. This field is not supported on Windows.

fsRead maps to ru_inblock which is the number of times the file system had to perform input.
fsWrite maps to ru_oublock which is the number of times the file system had to perform output.

voluntaryContextSwitches maps to ru_nvcsw which is the number of times a CPU context switch resulted due to a process voluntarily giving up the processor before its time slice was completed (usually to await availability of a resource). This field is not supported on Windows.

involuntaryContextSwitches maps to ru_nivcsw which is the number of times a CPU context switch resulted due to a higher priority process becoming runnable or because the current process exceeded its time slice. This field is not supported on Windows.
*/

// Node.js version string
process.version; // v20.10.0

// returns an object listing the version strings of Node.js and its dependencies
process.versions;

// command line application
function grab(flag) {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
}
let firstName = grab("--firstname");
let lastName = grab("--lastname");

// node 1 --firstname Zeynep --lastname Akkaya
console.log(firstName); // Zeynep
console.log(lastName); // Akkaya

// standard output & standard input
process.stdout.write("Hello World\n");
// process.stdin.on

// setTimeout clearTimeout setInterval clearInterval
const waitTime = 3000; // 3 secs
const timerFinished = () => {
  console.log("Done!");
  clearInterval(interval); // for the interval below
};
setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;
const incrementTime = () => {
  currentTime += waitInterval;
  console.log(`Waiting for ${currentTime / 1000} seconds.`);
};
const interval = setInterval(incrementTime, waitInterval);
/*
Waiting for 0.5 seconds.
Waiting for 1 seconds.
Waiting for 1.5 seconds.
Waiting for 2 seconds.
Waiting for 2.5 seconds.
*/
