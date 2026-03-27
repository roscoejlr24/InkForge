export class Preview3D {
    constructor(containerElement) {
        this.container = containerElement;
        this.initialized = false;
    }

    init() {
        try {
            this.initialized = true;
            console.log('3D Preview initialized');
        } catch (error) {
            console.error('3D Preview initialization error:', error);
        }
    }

    addTattooModel(modelData) {
        if (!this.initialized) {
            throw new Error('3D Preview not initialized');
        }
        return true;
    }

    render() {
        if (!this.initialized) {
            throw new Error('3D Preview not initialized');
        }
        return true;
    }
}