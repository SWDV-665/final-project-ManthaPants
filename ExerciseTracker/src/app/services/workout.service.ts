import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private exerciseHistory: any[] = [];

  constructor() {
    // Initialize exercise history with some mock data (replace with your actual data)
    this.exerciseHistory = [
      { type: 'Running', duration: '30', intensity: '5' },
      { type: 'Cycling', duration: '45', intensity: '4' },
      // ...more exercise history items
    ];
  }

  getExerciseHistory(): any[] {
    return this.exerciseHistory;
  }

  addWorkout(workout: any): void {
    this.exerciseHistory.push(workout);
  }

  deleteWorkout(index: number): void {
    if (index >= 0 && index < this.exerciseHistory.length) {
      this.exerciseHistory.splice(index, 1);
    }
  }

  getTotalDuration(): number {
    return this.exerciseHistory.reduce(
      (total, workout) => total + parseInt(workout.duration),
      0
    );
  }

  getAverageIntensity(): number {
    const totalIntensity = this.exerciseHistory.reduce(
      (total, workout) => total + parseInt(workout.intensity),
      0
    );
    return totalIntensity / this.exerciseHistory.length;
  }
}
