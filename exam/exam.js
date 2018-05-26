function canBeTriangle(a, b, c) {
    if (b < (a + c) && a < (b + c) && c < (a + b)) {
        return true;
    }
    return false;
}

