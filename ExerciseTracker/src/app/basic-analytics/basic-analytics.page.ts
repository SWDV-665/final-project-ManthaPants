import { Component } from '@angular/core';
import { WorkoutService } from '../services/workout.service';

@Component({
  selector: 'app-basic-analytics',
  templateUrl: './basic-analytics.page.html',
  styleUrls: ['./basic-analytics.page.scss'],
})
export class BasicAnalyticsPage {
  totalDuration: string;
  averageIntensity: string;
  
  constructor(private workoutService: WorkoutService) {
    const workouts = this.workoutService.getExerciseHistory();
    this.totalDuration = this.calculateTotalDuration(workouts);
    this.averageIntensity = this.calculateAverageIntensity(workouts);
  }
  
  calculateTotalDuration(workouts: any[]) { // Explicitly specify the type for workouts
    let totalDuration = 0;
    workouts.forEach(workout => {
      totalDuration += parseInt(workout.duration);
    });
    return totalDuration.toString() + ' minutes';
  }
  
  calculateAverageIntensity(workouts: any[]) { // Explicitly specify the type for workouts
    let totalIntensity = 0;
    workouts.forEach(workout => {
      totalIntensity += parseInt(workout.intensity);
    });
    const averageIntensity = totalIntensity / workouts.length;
    return averageIntensity.toFixed(2);
  }
}
