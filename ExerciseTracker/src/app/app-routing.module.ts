import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'workout-log',
    loadChildren: () => import('./workout-log/workout-log.module').then(m => m.WorkoutLogPageModule)
  },
  {
    path: 'exercise-history',
    loadChildren: () => import('./exercise-history/exercise-history.module').then(m => m.ExerciseHistoryPageModule)
  },
  {
    path: 'basic-analytics',
    loadChildren: () => import('./basic-analytics/basic-analytics.module').then(m => m.BasicAnalyticsPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
