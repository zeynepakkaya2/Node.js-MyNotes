// The util module supports the needs of Node.js internal APIs.
const util = require("util");

// The v8 module exposes APIs that are specific to the version of V8 built into the Node.js binary.
const v8 = require("v8");

// Get statistics about code and its metadata in the heap
v8.getHeapCodeStatistics();
/*
28 Nov 14:05:51 - {
  total_heap_size: 4177920,
  total_heap_size_executable: 262144,
  total_physical_size: 3686400,
  total_available_size: 2195329608,
  used_heap_size: 3385184,
  heap_size_limit: 2197815296,
  malloced_memory: 262320,
  peak_malloced_memory: 107520,
  does_zap_garbage: 0,
  number_of_native_contexts: 1,
  number_of_detached_contexts: 0,
  total_global_handles_size: 8192,
  used_global_handles_size: 2336,
  external_memory: 1310893
}
*/

// Returns statistics about the V8 heap spaces, i.e. the segments which make up the V8 heap.
v8.getHeapSpaceStatistics();
/*
  {
    space_name: 'new_space',
    space_size: 1048576,
    space_used_size: 371320,
    space_available_size: 659560,
    physical_space_size: 557056
  },
  {
    space_name: 'old_space',
    space_size: 2588672,
    space_used_size: 2540504,
    space_available_size: 0,
    physical_space_size: 2621440
  },
  {
    space_name: 'code_space',
    space_size: 262144,
    space_used_size: 212976,
    space_available_size: 0,
    physical_space_size: 229376
  },
  {
    space_name: 'large_object_space',
    space_size: 278528,
    space_used_size: 262160,
    space_available_size: 0,
    physical_space_size: 278528
  },
*/

v8.getHeapStatistics();
/*
{
  total_heap_size: 4177920,
  total_heap_size_executable: 262144,
  total_physical_size: 3686400,
  total_available_size: 2195317936,
  used_heap_size: 3396840,
  heap_size_limit: 2197815296,
  malloced_memory: 262320,
  peak_malloced_memory: 107520,
  does_zap_garbage: 0,
  number_of_native_contexts: 1,
  number_of_detached_contexts: 0,
  total_global_handles_size: 8192,
  used_global_handles_size: 2272,
  external_memory: 1310893
}
*/
/*
does_zap_garbage is a 0/1 boolean, which signifies whether the --zap_code_space option is enabled or not.
This makes V8 overwrite heap garbage with a bit pattern.
The RSS footprint (resident set size) gets bigger because it continuously touches all heap pages and that makes them less likely to get swapped out by the operating system.

number_of_native_contexts is the number of the top-level contexts currently active.
Increase of this number over time indicates a memory leak.

number_of_detached_contexts is the number of contexts that were detached and not yet garbage collected.
This number being non-zero indicates a potential memory leak.

total_global_handles_size is the total memory size of V8 global handles.

used_global_handles_size is the used memory size of V8 global handles.

external_memory is the memory size of array buffers and external strings.
*/
