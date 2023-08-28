import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { WorkoutService } from '../services/workout.service'; // Import WorkoutService

@Component({
  selector: 'app-workout-log',
  templateUrl: './workout-log.page.html',
  styleUrls: ['./workout-log.page.scss'],
})
export class WorkoutLogPage {
  workout = {
    type: '',
    duration: '',
    intensity: '',
  };

  constructor(
    private navCtrl: NavController,
    private workoutService: WorkoutService // Inject WorkoutService
  ) {}

  logWorkout() {
    // Log the workout using the WorkoutService
    this.workoutService.addWorkout(this.workout);

    // Clear the input fields after logging
    this.workout = {
      type: '',
      duration: '',
      intensity: '',
    };

    // Redirect to exercise history page
    this.navCtrl.navigateForward('/exercise-history');
  }
}
