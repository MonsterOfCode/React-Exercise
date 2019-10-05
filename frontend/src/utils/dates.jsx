export const millisecondsToDate = function(millisec) {
    return (new Date(millisec).toUTCString());
}